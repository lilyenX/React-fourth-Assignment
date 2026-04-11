import classes from './Container.module.css'

interface ContainerProps{
    children: React.ReactNode,
}

const Container = ({children}:ContainerProps) => {
  return (
    <main className={classes.main}>
        <div className={classes.content}>
            {children}
        </div>
    </main>
  )
}

export default Container
