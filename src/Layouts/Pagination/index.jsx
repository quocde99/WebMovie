import React from 'react'
import * as style from "../Pagination/pagination.module.css"
const Pagination=({postPerPage,totalPost,paginate,currentPage}) =>{
    const pageNumber = [];
    for(let i = 1 ;i <=Math.ceil(totalPost/postPerPage);i++){
        pageNumber.push(i);
    }
    return (
       <nav>
           <ul className={style.pagenumbers}>
               {pageNumber.map((number)=>{
                   if(currentPage===number){
                       return  <li key={number} className={style.active} style={{marginTop:"10px"}}><a 
                       onClick = {()=>{
                           paginate(number);
                       }}
                       >
                           {number}
                           </a></li>
                   }
                   else {
                    return <li key={number} style={{marginTop:"10px"}}><a 
                    onClick = {()=>{
                        paginate(number)
                    }}
                    >
                        {number}
                        </a></li>
                   }
               })}
           </ul>
       </nav>
    )
}
export default Pagination;
