if (me.id !== this.receiverId) {
    emit(dpd.users, {id: this.receiverId}, 'rvwmateReq', this);
}
