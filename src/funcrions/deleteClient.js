import axios from "axios";
import swal from "sweetalert";
import { constants } from "../Helpers/constantsFile";
import { useSelector } from "react-redux";

export const deleteClient = (title, name, url, fun, removeInstance, token, socket) => {

    swal({
      title: title,
      text: `Are you sure to delete ${name}?`,
      icon: "warning",
      buttons: {
        cancel : 'No',
        confirm : {text:'Yes',className:'sweet-warning'},
    }

    }).then((response) => {
      if (response) {
        axios.post(url, {
        },
        {
          headers: {
            'authorization': token
           },
        }).then((res)=> {
          console.log(res.data)
          swal({text: `You have successfully deleted ${name}`,
          icon:"success", timer: "2000"})
          fun()
          removeInstance()
        }).catch((err) => {
          console.log(err)
          swal({text: err.response?.data?.message,
      icon:"error", timer: "2000"})
        })
        
      }
    })
  }