if (typeof worker === 'undefined') {
    window.location.reload();
}

worker.Helper.WriteLine('Test');
const log = (o) => {
    console.log(o);
};
log('test');
