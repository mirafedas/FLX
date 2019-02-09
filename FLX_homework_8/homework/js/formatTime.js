const formatTime = (number) => {
    const days = (number / 1440).toFixed();
    const hours = ((number%1440) / 60).toFixed();
    const minutes = ((number%1440)%60);
    return(`${days} day(s) ${hours} hour(s) ${minutes} minute(s)`)
}
formatTime()