import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SolRequest, ResponseServiceSingle, ResponseServiceSingleWithID } from '../../interfaces/info-page-services.interface';
import { SendNotificationsService } from '../../services/send-notifications.service';
import { InfoPageContactUsService } from '../../services/info-page-contact-us.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styles: [
  ]
})
export class ModalFormComponent implements OnInit {
  
  formaSolModal: FormGroup;

  solRequest: SolRequest = {};

  responseSolRequest: ResponseServiceSingle = {};
  responseSolRequestN: ResponseServiceSingle = {};

  responseWithID: ResponseServiceSingleWithID = {};

  constructor(public modelFormService: ModalFormService,
              public _infoSendNotificationsService: SendNotificationsService,
              public contactUsService: InfoPageContactUsService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  cerrarModal() {
    
    this.modelFormService.cerrarModal();   

  }
  
  /********************
  * Rutina para validar el nombre del formulario
  * @title nameNoValido
  * @return Dvuelve un valor Booleano falso o verdader
  */
  get nameNoValido() {
    return this.formaSolModal.get('name').invalid && this.formaSolModal.get('name').touched;
  }
  /********************
  * Rutina para validar el subject del mensaje
  * @title subjectNoValido
  * @return Dvuelve un valor Booleano falso o verdader
  */
  get subjectNoValido() {
    return (
      this.formaSolModal.get('subject').invalid && this.formaSolModal.get('subject').touched
    );
  }
  /********************
  * Rutina para validar el correo del mensaje, el formato
  * @title emailNoValido
  * @return Dvuelve un valor Booleano falso o verdader
  */
  get emailNoValido() {
    return this.formaSolModal.get('email').invalid && this.formaSolModal.get('email').touched;
  }
  /********************
  * Rutina para el mensaje y cantidad de caracteres
  * @title messageNoValido
  * @return Dvuelve un valor Booleano falso o verdader
  */
  get messageNoValido() {
    return (
      this.formaSolModal.get('message').invalid && this.formaSolModal.get('message').touched
    );
  }
  
  crearFormulario() {
    this.formaSolModal = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        subject: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
        message: ['', [Validators.required, Validators.minLength(25)]]
      }
    );
  }  
  
  
  guardarSolModal() {

    console.log(this.formaSolModal);

    console.log("pasa a la clase");

    console.log(this.formaSolModal);

    if (this.formaSolModal.invalid) {
      return Object.values(this.formaSolModal.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }
    // sitio a donde se envia a servicio de salvar los datos
    // Posteo de información, limpia los datos

    this.solRequest.name = this.formaSolModal.value.name;
    this.solRequest.message = this.formaSolModal.value.message;
    this.solRequest.subject = this.formaSolModal.value.subject;
    this.solRequest.email = this.formaSolModal.value.email;
    
    Swal.fire({
       position: 'top-end',
      icon: 'info',
      title: 'Por favor espere...',
      text: 'Guardando la informacion...',
      allowOutsideClick: false,
      timer: 5000
    });
    Swal.showLoading();
    
    this.contactUsService.buscarContactUs_SolRequest(this.solRequest).subscribe
      ((response: ResponseServiceSingle) => {
        this.responseSolRequest = response;
        console.log(this.responseSolRequest.error);
        console.log(this.responseSolRequest.mensaje);

        if (this.responseSolRequest.error == "true") {
          console.log("Se coloca un alerta");
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Ya correo esta registrado!!!',
            showConfirmButton: true
          })

        } else { //
          console.log("se puede guardar va al post");

          /** Llama al servicio de Creacion de registro de solicitud de informacion */

          this.contactUsService.crearRegistroSolicitud("1", "1", this.solRequest)
            .subscribe((responseServiceWithID: ResponseServiceSingleWithID) => {

              this.responseWithID = responseServiceWithID;
              console.log(responseServiceWithID);
              if (this.responseWithID.error = "false") {

                /** Llama al servicio de notificaciones */
                this._infoSendNotificationsService.enviarNotificaciones("1", "1", this.solRequest)
                  .subscribe((responseServiceN: ResponseServiceSingle) => {

                    this.responseSolRequestN = responseServiceN;

                    if (this.responseSolRequestN.error = "false") {

                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Guardando la información!!!',
                        text: 'Su solicitud ha sido guardada correctamente...',
                        showConfirmButton: true
                      })

                      this.formaSolModal.reset({
                        name: '',
                        subject: '',
                        message: '',
                        email: ''
                      });
                      
                      this.modelFormService.cerrarModal();

                    } else {

                      Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'Falla en los servicios de notificaciones, comunicarse con el Administrador!!!',
                        showConfirmButton: true
                      });

                    }

                  });

              } else {

                Swal.fire({
                  position: 'top-end',
                  icon: 'warning',
                  title: 'Falla en los servicios de Base datos, comunicarse con el Administrador!!!',
                  showConfirmButton: true
                });

              }
            });

        }

      });
  }
  
  


}
