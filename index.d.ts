declare module '*.json' {
    const value: any
    export default value
}

interface Env {
    NODE_ENV: string
}

interface Process {
    env: Env
}

declare var process: Process
