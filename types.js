function subscribe() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("finally out side the block " + i);
}
subscribe();
