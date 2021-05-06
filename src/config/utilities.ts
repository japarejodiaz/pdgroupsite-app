import { environment } from '../environments/environment';

export const URL_SERVICIOS_1 = "http://localhost/apiRestFull/index.php";
let URL_SERVICIOS_FINAL = "http://localhost/apiRestFull/index.php";

if (environment.production) {

  URL_SERVICIOS_FINAL = "https://desatisolution.com.ve/apiRestFull/index.php";

}

/** Variable que indica el dominio de Desa o Producccion */

export let URL_SERVICIOS = URL_SERVICIOS_FINAL;
