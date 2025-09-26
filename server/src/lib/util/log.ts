const oCOut = console.log
export function log(...data: any[]) {
    const prefix = new Date().toISOString()
    oCOut(`${prefix}`, ...data)
}

console.log = log
