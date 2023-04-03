import React from 'react'
import data from 'data/notifications.json'

const NotificationContext = React.createContext({})

const AppWrapper = ({children}:{children:React.ReactNode}) => {
    const notificationsState = data.notifications.map((notification) => ({...notification, unread: true}))
    return(
        <NotificationContext.Provider value={notificationsState}>{children}</NotificationContext.Provider>
    )
}

const useAppContext = () => {
    return React.useContext(NotificationContext)
}

export { AppWrapper, useAppContext }