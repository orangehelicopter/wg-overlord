import * as React from "react";
import {TimeWidget} from "./widgets/TimeWidget";

export interface HelloProps {
   compiler: string;
   framework: string;
}

export class App extends React.Component<HelloProps, any> {

   // this constructor is necessary to make the props work
   constructor(props: HelloProps, context: any) {
      super(props, context);
   }

   render() {
      return <div className="container container-fluid">
         <div className="row">
            <div className="col-md-4">
               <TimeWidget/>
            </div>
            <div className="col-md-8">
               <h1>Hello mortals, I am the WG overlord!</h1>
            </div>
         </div>
         <div className="row align-items-middle">
            <div className="col-md-4">
               <p>Here is a fantastic KVV widget</p>
            </div>
            <div className="col-md-4">
               <p><span className="myCustomStyleClass">Here is a fantastic cinema times widget</span></p>
            </div>
         </div>
      </div>;
   }
}