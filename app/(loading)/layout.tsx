export default function LoadingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex flex-auto flex-col">
        {children}
      </main>
    )
  }