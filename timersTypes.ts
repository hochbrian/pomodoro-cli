export enum sessionType {
    "w" = "Work",
    "b" = "Break",
    "lb" = "Long Break",
    "l" = "Lunch"
}

export type session = {
    session: sessionType,
    wkDuration?: number,
    bkDuration?: number,
    label: string,
    sessionNumber: number
}

export const timers: {[id: string]: session[]}  = {
    test: [
        {
            session: sessionType.w,
            wkDuration: 0.5,
            bkDuration: 0.25,
            label: "Short Work",
            sessionNumber: 1
        },
        {
            session: sessionType.b,
            bkDuration: 0.5,
            label: "Long Break",
            sessionNumber: 2
        }
    ]
}