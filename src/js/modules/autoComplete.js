import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./../helpers/countryList";

function autoCompleteFunc() {
    const autoCompleteJS = new autoComplete({
        selector: "#autoCompleteCountry",
      placeHolder: "e.g Zimbabwe",
      data: {
        src: countryList,
      },
      resultItem: {
        highlight: true,
      },
      events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            }
        }
      },
      searchEngine: 'strict'
    });
}

export default autoCompleteFunc