function deepCopy (obj) {
    if (obj === null) return null;
    let clone = Object.assign({}, obj);

    if (obj instanceof Error)
        clone = new Error(obj.message);

    Object.keys(clone).forEach(key => (clone[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key]));

    return Array.isArray(obj) && obj.length
        ? (clone.length = obj.length) && Array.from(clone)
        : Array.isArray(obj)
            ? Array.from(obj)
            : clone;
}

error = Error("new error")
error2 = deepCopy(error)
console.log(error)
console.log(error2)
