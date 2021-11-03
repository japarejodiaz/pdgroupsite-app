import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SolSubscription, ResponseServiceSingle, ResponseServiceSingleWithID } from '../../interfaces/info-page-services.interface';
import { InfoPageFooterSubscripcionService } from '../../services/info-page-footer-subscripcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  formaSubscription: FormGroup;

  solSubscription: SolSubscription = {};
  responseSolSubscription: ResponseServiceSingle = {};
  responseSolSubscriptionWithID: ResponseServiceSingleWithID = {};

  constructor(public pageService: InfoPageService,
    private fb: FormBuilder, public _httpSubscription: InfoPageFooterSubscripcionService) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  /********************
  * Rutina para validar el correo del mensaje, el formato
  * @title emailNoValido
  * @return Dvuelve un valor Booleano falso o verdader
  */
  get emailNoValido() {
    return this.formaSubscription.get('email_subscription').invalid && this.formaSubscription.get('email_subscription').touched;
  }

  crearFormulario() {
    this.formaSubscription = this.fb.group(
      {
        email_subscription: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]]
      }
    );
  }

  guardarSubscription() {

    // console.log("Prueba del envio");

    // console.log(this.formaSubscription);

    if (this.formaSubscription.invalid) {
      return Object.values(this.formaSubscription.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }

    // console.log(this.formaSubscription.value.mail_subscription);

    this.solSubscription.email_subscription = this.formaSubscription.value.email_subscription;

    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'Por favor espere...',
      text: 'Guardando la informacion...',
      allowOutsideClick: false,
      timer: 3000
    });

    Swal.showLoading();

    this._httpSubscription.crearSubscription("1", "1", this.solSubscription)
      .subscribe((responseService: ResponseServiceSingle) => {

        this.responseSolSubscription = responseService;
        console.log(this.responseSolSubscription.error);

        if (this.responseSolSubscription.error == "false") {

          console.log("es false");

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su subscripción ha sido guardada satisfactoriamente!!!',
            showConfirmButton: true
          })

          this.formaSubscription.reset({
            email_subscription: ''
          });

        } else {

          console.log("es ttrue");

          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Cuenta correo ya registrada en nuestros sistemas!!!',
            showConfirmButton: true
          });

        }

      });


  }

}
