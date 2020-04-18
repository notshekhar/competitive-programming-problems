const binary_ascii = (binarys) =>
    binarys.map((binary) => String.fromCharCode(parseInt(binary, 2))).join("")

const hex_ascii = (hex_codes) =>
    hex_codes.map((hex) => String.fromCharCode(parseInt(hex, 16))).join("")

modeule.exports = {
    binary_ascii,
    hex_ascii,
}
