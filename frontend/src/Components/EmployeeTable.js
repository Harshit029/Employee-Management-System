import React from 'react'
import { DeleteEmployeeById } from '../api';
import { Link } from 'react-router-dom'; 
import { notify } from '../util';

export default function EmployeeTable({
    employees,
    pagination,
    fetchEmployee,
    handleUpdateEmployee,
   
    
}) {
    const headers=['Name','Email','Phone','Department','Actions'];
    const {currentPage,totalPages
    } =pagination;
    const TableRow= ({employee})=>{
        return <tr>
            <td>
            <Link to={`/employee/${employee._id}`} className='text-decoration-none'>
          {employee.name}
        </Link>
            </td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.department}</td>
            <td>
                <i className='bi bi-pencil-fill text-warning md-4'
                role='button'
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                onClick={() => handleUpdateEmployee(employee)}
                >

                </i>
                <i className='bi bi-trash-fill text-danger md-4'
                role='button'
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                onClick={() => handleDeleteEmployee(employee._id)}
                >

                </i>
                </td> 
        </tr>
    }
    const pageNumbers= Array.from({length: totalPages},(_,index)=> index+1);
  
    const handlePagination = (currPage) => {
        fetchEmployee('', currPage, 5);
    };

    const handleDeleteEmployee = async (id) => {
        try {
            const { success, message } = await DeleteEmployeeById(id);
            if (success) {
              notify(message, 'success')
            } else {
               notify(message, 'error')
            }
            fetchEmployee();
        } catch (err) {
            console.error(err);
            notify('Failed to delete Employee', 'error')
        }
    }
   
 return (<>
    
    
    <table className='table table-striped'>
        <thead>
            <tr>{
                headers.map((header,i)=>( 
                    <th key={i}>{header}</th>

                ))
            }
            </tr>
        </thead>
        <tbody>
            {
                 employees.map((emp) => (
                    <TableRow key={emp._id} employee={emp}/>
                 ))
            }
        
        </tbody>
        
    </table>
    <div className='d-flex justify-content-between align-items-center my-3'>
            <span className='badge bg-primary'>Page{currentPage}of{totalPages}</span>
            <div>
                <button
                className='btn btn-outline-primary me-2'
                onClick={()=>handlePagination(currentPage - 1)}
                 disabled={currentPage===1}  
                >
                    Previous
                </button>
                {
                    pageNumbers.map((page)=>(
                      <button className={`btn btn-outline-primary me-1 ${currentPage === page ? 'active' : ''}`}
                      onClick={() => handlePagination(page)}
                      > 
                        {page}
                      </button>
                    
                    ))
                }
                <button
                className='btn btn-outline-primary ms-2'
                onClick={()=>handlePagination(currentPage + 1)}
                 disabled={totalPages === currentPage}  
                >
                  Next
                </button>
            </div>

        </div>
    </>
  )
}