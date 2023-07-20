import {Component} from "@angular/core";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['/password.component.scss']
})
export class PasswordComponent {

  checkPasswordStrength(val: string) {
    let elem1 = document.getElementById("first")
    let elem2 = document.getElementById("second")
    let elem3 = document.getElementById("third")
    let arrayElems = [elem1, elem2, elem3]

    //regular expressions
    let onlyLetters = new RegExp(/^[a-zA-Z]+$/g)
    let onlyDigits = new RegExp(/^\d+$/g)
    let onlySymbols = new RegExp(/^[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|~-]+$/g)
    let lettersAndSymbols = new RegExp(/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|~-]).+$/g)
    let lettersAndDigits = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/g)
    let digitsAndSymbols = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|~-]).+$/g)
    let lettersDigitsSymbols = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|~-])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|~-]+$/g)

    if (elem1 != null && elem2 != null && elem3 != null) {

      if (val === "") {
        this.setAllColor(arrayElems, 'gray')
      } else if (val.length < 8) {
        this.setAllColor(arrayElems, 'red')
      } else if (val.match(onlyLetters)?.length == 1 || val.match(onlyDigits)?.length == 1 ||
        val.match(onlySymbols)?.length == 1) {
        this.setAllColor(arrayElems, 'gray')
        elem1.style.background = 'red'

      } else if (val.match(lettersAndSymbols)?.length == 1 || val.match(lettersAndDigits)?.length == 1 ||
        val.match(digitsAndSymbols)?.length == 1) {
        this.setAllColor(arrayElems, 'gray')
        elem1.style.background = 'yellow'
        elem2.style.background = 'yellow'

        if (val.match(lettersDigitsSymbols)?.length == 1) {
          this.setAllColor(arrayElems, 'green')
        }
      }


    }

  }

  setAllColor(array: (HTMLElement | null)[], color: string) {
    array.forEach(function (elem) {
      if (elem != null) {
        elem.style.background = color
      }

    })
  }

}
