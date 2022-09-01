export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Project Name', width: 130 },
    { field: 'type', headerName: 'Project Type', width: 130 },
    { field: 'description', headerName: 'Project Description',width: 190},
    { field: 'priority', headerName: 'Project Priority', width: 130 },
    { field: 'deadline', headerName: 'Project Deadline', width: 130 },
    { field: 'team', headerName: 'Project TeamMembers', width: 180 },
    { field: 'status', headerName: 'Project Status', width: 130,

     renderCell:(params)=>{
         return(

          <div className={`status ${params.row.status}`}>{params.row.status}</div>
         )
     }
    },
   
  ];
  
 export const rows = [
    { id: 1, type: 'Research', name: 'FYP-1', description:'App in flutter',priority:'high',deadline:'21st-May-2022',team:'ali,ahmed',status:'Ongoing' },
    { id: 2, type: 'Development', name: 'FYP-2', description:'Deploy maps',priority:'medium',deadline:'24th-May-2022',team:'usman,ahsan',status:'Completed' },
    { id: 3, type: 'Research&Development', name: 'FYP-3', description:'Testing phase',priority:'high',deadline:'1st-May-2022',team:'wasif,ahmed',status:'Upcoming' },
  
 
    
  ];

  export const teamsCols =[

    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Team Name', width: 130 },
    { field: 'assigned', headerName: 'Project Assigned', width: 130 },


  ];

  export const teamRows =[

    {id:1,name: 'saad,Faraz,quassain',assigned:'FYP-1'},
    {id:2,name: 'Usman,SIkandar,talha',assigned:'FYp-2'},
    {id:3,name: 'Justin,ZAyn malik,Selena Gomez',assigned:'Fyp-3'},
  ];

  export const tasksCols=[
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Task Name', width: 200 },
    { field: 'priority', headerName: 'Task Priority', width: 130, 
    renderCell:(params)=>{
        return(

         <div className={`priority ${params.row.priority}`}>{params.row.priority}</div>
        )
    } },
    { field: 'deadline', headerName: 'Task Deadline', width: 130 },
    { field: 'time', headerName: 'Time Spent', type:'number', width: 90 },
    { field: 'overdue', headerName: 'Overdue', width: 100 },
    { field: 'status', headerName: 'Task Status', width: 130, 
    renderCell:(params)=>{
        return(

         <div className={`status ${params.row.status}`}>{params.row.status}</div>
        )
    } },
    { field: 'tname', headerName: 'Team Members', width: 130 },

  ];

  export const tasksRows=[
    {id:1,name: 'Design the UI',priority: 'High',deadline:'1st May 2022',time:5,overdue:'no',status:'Completed',tname:'faraz,quassain'},
    {id:2,name: 'Backend',priority: 'low',deadline:'21st May 2022',time:6,overdue:'yes',status:'Ongoing',tname:'saad,Maaz'},
    {id:3,name: 'Testing',priority: 'medium',deadline:'11th May 2022',time:5,overdue:'no',status:'Completed',tname:'JB,SELENA'},

  ];