import NextErrorComponent from 'next/error'

const MyError = ({ statusCode, hasGetInitialPropsRun, err }) => {
  return <NextErrorComponent statusCode={statusCode} />
}

MyError.getInitialProps = async ({ res, err, asPath }) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err,
  })

  errorInitialProps.hasGetInitialPropsRun = true

  if (err) {
    return errorInitialProps
  }
  return errorInitialProps
}

export default MyError
