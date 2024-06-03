interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const Page = ({ searchParams }: PageProps) => {
  // make db call
  const { id } = searchParams

  return <p>{id}</p>
}

export default Page
