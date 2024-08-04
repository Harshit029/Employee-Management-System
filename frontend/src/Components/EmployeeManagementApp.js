import React, { useEffect,useState } from 'react'
import EmployeeTable from './EmployeeTable'
import { DeleteEmployeeById, GetALLEmployees } from '../api';
import AddEmployee from './AddEmployee';
import { ToastContainer } from 'react-toastify';
import { notify } from '../util';
export default function EmployeeManagementApp() {
       const [showModal, setshowModal] =useState(false);
       const [updateEmpObj, setUpdateEmpObj] =useState(null);
    const[employeeData, setEmployeeData]= useState({
       "employees":[],
        "pagination": {
			"totalEmployees": 0,
			"currentPage": 1,
			"totalPages": 1,
			"pageSize": 5
		}
    });
    
    const fetchEmployee= async (search='',page=1,limit=5)=>{
        try{
           const {data}= await GetALLEmployees(search,page,limit);
    
           setEmployeeData(data);
           
        }catch(err){
            console.log('Error',err)

        }


    }

    
    useEffect(()=>{
        fetchEmployee();
    }
    ,[])

    const handleAddEmployee = () =>{
        setshowModal(true);
    }
  const handleUpdateEmployee=(empObj)=>{
    console.log('updated object',empObj);
    setUpdateEmpObj(empObj);
    setshowModal(true);
  }
  
  
  
  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 p-3'>
        <h1>Employee Management System</h1>
        <div className='w-100 d-flex justify-content-center'>
            <div className='w-80 border bg-light p3'style={{width:'80%'}}>
                <div className='d-flex justify-content-between mb-3'>
                    <button className='btn btn-primary'
                       onClick={()=> handleAddEmployee()}
                     >
                        Add
                    </button>
                    <input
                         type='text'
                         placeholder='Search Employees...'
                         className='form-control w-50'
                    ></input>
                </div>
                <EmployeeTable
                  handleUpdateEmployee={handleUpdateEmployee}
                    fetchEmployee={fetchEmployee}
                    employees={employeeData.employees}
                    pagination={employeeData.pagination}
                  
                />
                <AddEmployee
              
                updateEmpObj={updateEmpObj}
                fetchEmployee={fetchEmployee}
                 showModal={showModal}
                 setshowModal={setshowModal}
                />
            </div>
        </div>
        <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar={false}
            />
    </div>
  )
}
