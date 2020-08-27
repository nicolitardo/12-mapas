import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.forma = fb.group({
        titulo: data.titulo,
        desc: data.desc
      });
    }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardarCambios() {
    this.dialogRef.close(this.forma.value);
  }

}
