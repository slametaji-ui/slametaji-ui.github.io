$(document).on("click", ".bulk-delete", function (e) {
	e.preventDefault();
	const href = $(this).attr('href');

	Swal.fire({
		title: 'Are you sure?',
		text: "You will not be able to return this!",
		icon: 'warning',
		showCancelButton: true,
		cancelButtonColor: '#949596',
		confirmButtonColor: '#d33',
		confirmButtonText: 'Yes, deleted!'
	}).then((result) => {
		if (result.isConfirmed) {
			document.location.href = href;
		}
	});
});
