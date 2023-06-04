export const currency = (maxPrice) => {
    let number = maxPrice?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

    return number
  }