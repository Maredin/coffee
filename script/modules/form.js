
function form() {
    const btn = document.querySelector('.contant__block-form-btn');

    function clearInput() {
        document.querySelector('.contant__block-form-name').value = '';
        document.querySelector('.contant__block-form-mail').value = '';
        document.querySelector('.contant__block-form-tel').value = '';
    }

    function formPost() {
        const res = {
            name: document.querySelector('.contant__block-form-name').value,
            mail: document.querySelector('.contant__block-form-mail').value,
            tel: document.querySelector('.contant__block-form-tel').value,
        }

        clearInput();

        console.log(res);
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const formInputs = document.querySelectorAll('.contant__block-form input');
        let errorForm = false;
        for (let item of formInputs) {
            !item.value && (errorForm = true);
        }

        !errorForm && formPost();

    })

}

export default form;