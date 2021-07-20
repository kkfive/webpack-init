export default function say(message: any): void {
  setTimeout(() => {
    console.log(message)
  }, 2000)
}
