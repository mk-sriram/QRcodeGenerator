

const shortBtn = document.getElementsByClassName('short-btn');

shortBtn.addEventListener('click', qrCodeGenerator);

function qrCodeGenerator(){
    console.log('button activated')
    const originalText = document.getElementById('originaltext');

    console.log('past OriginalText')
}

// may have to use a canvas instead of a Img tag 