export const toggleForm = (formToShow, formToHide) => {
    $(formToHide).addClass("d-none");
    $(formToShow).removeClass("d-none");
};