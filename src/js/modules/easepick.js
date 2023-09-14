import { TimePlugin, easepick } from "@easepick/bundle";


function easepickFunc () {
    const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        format: 'HH:mm, DD/MM/YY',
        plugins: [TimePlugin],
        zIndex: 10,
        css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css'],
    })
}

export default easepickFunc
