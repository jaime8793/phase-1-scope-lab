var customerName = 'bob';
function setBestCustomer() {
    window.bestCustomer = 'not bob';
}
function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
}
function overwriteBestCustomer(newBestCustomer) {
    window.bestCustomer = newBestCustomer;
}
const leastFavoriteCustomer = 'Becky';
function changeLeastFavoriteCustomer(newLeastFavoriteCustomer) {
    leastFavoriteCustomer = newLeastFavoriteCustomer;
}