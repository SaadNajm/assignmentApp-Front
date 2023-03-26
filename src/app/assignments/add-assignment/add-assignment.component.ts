import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignments.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {
  @Output() nouvelAssignment = new EventEmitter<Assignment>()
  nomAssignment?:string;
  dateDeRendu?:Date;






  onSubmit(){
    const newAssignment= new Assignment();
    if((this.nomAssignment)&&(this.dateDeRendu)){
        newAssignment.nom=this.nomAssignment;
        newAssignment.dateDeRendu=this.dateDeRendu;
        newAssignment.rendu=false;
       //this.assignments.push(newAssignment);
       this.nouvelAssignment.emit(newAssignment);
    }

  }
}
