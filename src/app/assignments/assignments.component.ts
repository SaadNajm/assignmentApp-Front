import { Component } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignments.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  ajoutActive=false;
  assignmentSelectionne?:Assignment;
  formVisible=false;
//champs du form


assignments:Assignment[]=[]
constructor(private assignmentsService:AssignmentsService){}
ngOnInit():void{
  this.assignmentsService.getAssignments().subscribe(assignments=>{
    this.assignments=assignments;
  })
}


assignmentClique(assignment:Assignment){
  console.log("Assignment clique "+assignment.nom);
  this.assignmentSelectionne=assignment;
}
onAddAssignmentBtnClick(){
this.formVisible=true;
}
onNouvelAssignment(assignment:Assignment){
this.assignmentsService.addAssignment(assignment).subscribe(message=>{
  console.log(message);
})
this.formVisible=false;
}


}
