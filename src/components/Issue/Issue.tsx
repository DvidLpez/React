import { faComments, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {  FC, ReactElement } from "react";
import { Link } from 'react-router-dom';
import IPropsIssue from '../../interfaces/IPropsIssue';

import './Issue.scss';

const cutString = (string:string, limit: number): string => {
   return string = (string.length > limit) ? `${string.substr(0, (limit-4))} ...` : string;
} 


const Item: FC<IPropsIssue> = (props: IPropsIssue): ReactElement => {

   const { number, title, bodyText, comments, state, author, createdAt } = props.data;

   return (
      <div className="col-12 col-md-6 col-xl-4">
         <Link to={`/issue/${number}`} >
            <div className="wrapper_issue">
               <div className="card_header">
                  <div className="row">
                     <div className="col-12 col-sm-10 col-md-9">
                        <b className="title">{cutString(title, 60)}</b>
                     </div>
                     <div className="col-12 col-sm-2 col-md-3">
                        <div className="total_comments">
                           <FontAwesomeIcon icon={faComments} className="icon_comments" />
                           {comments.totalCount}
                           <b className={state.toLowerCase()}>{state}</b>
                        </div>
                     </div>
                  </div>
               </div>
               <hr />
               <div className="card_body">
                  <p>{cutString(bodyText, 500)}</p>
                  <div className="opacity_text"></div>
               </div>
               <div className="card_footer">
                  <div className="row">
                     <div className="col-6">
                        <b className="author"><FontAwesomeIcon icon={faUser} className="icon_user" /> {author.login}</b>
                     </div>
                     <div className="col-6">
                        <b className="date">{createdAt}</b>
                     </div>
                  </div>
               </div>
               {/* <p>{item.body}</p> */}
            </div>
         </Link>
      </div>
   )
}
export default Item;