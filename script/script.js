document.querySelectorAll('.card-produk').forEach(card => {
    const input = card.querySelector('.quantity input');
    const minus = card.querySelector('.minus')
    const plus = card.querySelector('.plus')

    minus.addEventListener('click', () => {
        const harga = card.querySelector('.price');
        const nominalHarga = harga.textContent.match(/\d+/)[0];

        let value = parseInt(input.value);
        if(value > 1) {input.value = value - 1};
        harga.innerHTML = `$${(nominalHarga / value) * input.value}`
    })

    plus.addEventListener('click', () => {
        const harga = card.querySelector('.price');
        const nominalHarga = harga.textContent.match(/\d+/)[0];

        let value = parseInt(input.value);
        input.value = value + 1;
        harga.innerHTML = `$${(nominalHarga / value) * input.value}`
    })
})

$('#reset').click(() => {
    $('#output').css('display', 'none');

    $('.card-produk input').each((_, quantity) => {
        $(quantity).val(1);
    })
})