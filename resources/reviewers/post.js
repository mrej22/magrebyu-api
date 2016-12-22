if(!this.reviewerName || !this.reviewerType){
    error('msg','Please fill all the fields provided!');
} else if(me){
    this.creator = me.id;
}
else {
    error('auth','Please Login first!');
}
