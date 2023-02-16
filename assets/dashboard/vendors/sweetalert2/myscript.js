const flashData = $('.flash-data').data('flashdata');
if (flashData) {
    Swal.fire(
        'Sukses!',
        flashData,
        'success'
      )
}

const flashData2 = $('.flash-data2').data('flashdata');
if (flashData2) {
    Swal.fire(
        'Gagal!',
        flashData2,
        'error'
      )
}

