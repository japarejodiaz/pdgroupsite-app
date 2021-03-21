import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoPageContactUsService } from '../../services/info-page-contact-us.service';
import { ResponseServiceSingle, SolRequest } from 'src/app/interfaces/info-page-services.interface';
import Swal from 'sweetalert2';
import { ResponseServiceSingleWithID } from '../../interfaces/info-page-services.interface';
import { SendNotificationsService } from '../../services/send-notifications.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  formaSol: FormGroup;

  solRequest: SolRequest = {};

  responseSolRequest: ResponseServiceSingle = {};
  responseSolRequestN: ResponseServiceSingle = {};

  responseWithID: ResponseServiceSingleWithID = {};

  constructor(public pageService: InfoPageService,
              public _infoSendNotificationsService: SendNotificationsService,
              private fb: FormBuilder,
              public contactUsService: InfoPageContactUsService) { }

  ngOnInit(): void {

    this.crearFormulario();
  }

  /********************
  * Rutina para validar el nombre del formulario
  * @title nameNoValido
  * @return Dvuelve un valor Booleano falso o verdader
  */
  get nameNoValido() {
    return this.formaSol.get('name').invalid && this.formaSol.get('name').touched;
  }
  /********************
  * Rutina para validar el subject del mensaje
  * @title subjectNoValido
  * @return Dvuelve un valor Booleano falso o verdader
  */
  get subjectNoValido() {
    return (
      this.formaSol.get('subject').invalid && this.formaSol.get('subject').touched
    );
  }
  /********************
  * Rutina para validar el correo del mensaje, el formato
  * @title emailNoValido
  * @return Dvuelve un valor Booleano falso o verdader
  */
  get emailNoValido() {
    return this.formaSol.get('email').invalid && this.formaSol.get('email').touched;
  }
  /********************
  * Rutina para el mensaje y cantidad de caracteres
  * @title messageNoValido
  * @return Dvuelve un valor Booleano falso o verdader
  */
  get messageNoValido() {
    return (
      this.formaSol.get('message').invalid && this.formaSol.get('message').touched
    );
  }

  /********************
  * Rutina para validar el subject del mensaje
  * @title nameNoValido
  * @return Dvuelve un valor Booleano falso o verdader
  */
  guardarSolContactUs() {

    // console.log(this.formaSol);

    // console.log("pasa a la clase");

    // console.log(this.formaSol);

    if (this.formaSol.invalid) {
      return Object.values(this.formaSol.controls).forEach((control) => {
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


    this.solRequest.name = this.formaSol.value.name;
    this.solRequest.message = this.formaSol.value.message;
    this.solRequest.subject = this.formaSol.value.subject;
    this.solRequest.email = this.formaSol.value.email;
    // // console.log(this.formaSol.value.name);

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
        // console.log(this.responseSolRequest.error);
        // console.log(this.responseSolRequest.mensaje);

        if (this.responseSolRequest.error == "true") {
          // console.log("Se coloca un alerta");
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Ya correo esta registrado!!!',
            showConfirmButton: true
          })

        } else { //
          // console.log("se puede guardar va al post");

          /** Llama al servicio de Creacion de registro de solicitud de informacion */

          this.contactUsService.crearRegistroSolicitud("1", "1", this.solRequest)
            .subscribe((responseServiceWithID: ResponseServiceSingleWithID) => {

              this.responseWithID = responseServiceWithID;
              // console.log(responseServiceWithID);
              if (this.responseWithID.error = "false") {

                /** Llama al servicio de notificaciones */
                this._infoSendNotificationsService.enviarNotificaciones("1", "1", this.solRequest)
                  .subscribe((responseServiceN: ResponseServiceSingle) => {

                    this.responseSolRequestN = responseServiceN;

                    if (this.responseSolRequestN.error = "false") {

                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Su solicitud ha sido guardada con satisfactoriamente!!!',
                        showConfirmButton: true
                      })

                      this.formaSol.reset({
                        name: '',
                        subject: '',
                        message: '',
                        email: ''
                      });

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

  crearFormulario() {
    this.formaSol = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        subject: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
        message: ['', [Validators.required, Validators.minLength(25)]]
      }
    );
  }

}
