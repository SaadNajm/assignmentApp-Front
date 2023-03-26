import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignments.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[]=[
    {
      nom:"Devoir Angular BUFFA",
      dateDeRendu:new Date("2021-12-18"),
      rendu:false
    },
    {
      nom:"Devoir BD MOPOLO",
      dateDeRendu:new Date("2021-10-10"),
      rendu:true
    },
    {
      nom:"Devoir Gestion projet Mr Michel Winter",
      dateDeRendu:new Date("2021-01-20"),
      rendu:false
    }

  ]
  constructor() { }

  getAssignments():Observable<Assignment[]>{
    return of(this.assignments);
  }
  addAssignment(assignment:Assignment):Observable<string>{
    this.assignments.push(assignment);
    return of ("Assignment ajoute");
  }
  updateAssignment(assignment:Assignment|undefined):Observable<string>{

    return of ("Assignment modifie");
  }
  deleteAssignment(assignment:Assignment):Observable<string>{
    const position=this.assignments.indexOf(assignment);
    this.assignments.splice(position,1);
    return of("Assignment supprime")
  }
}
