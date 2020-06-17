import React, { FC } from 'react'
import { useQuery } from 'react-apollo'
import useProduct from 'vtex.product-context/useProduct'
import { Spinner } from 'vtex.styleguide'

import ProductReleaseQuery from './graphql/productRelease.gql'
import Countdown from './Countdown'

const ProductReleaseCountdown: FC = () => {
  const {
    product: { linkText },
  } = useProduct()

  const { data, loading, error } = useQuery<
    {
      product: { releaseDate: string }
    },
    { productSlug: string }
  >(ProductReleaseQuery, {
    variables: { productSlug: linkText },
    ssr: false,
  })

  if (loading) {
    return <Spinner />
  }
  if (error) {
    console.error(error)
  }

  return (
    <Countdown
      countdownHeadline="Something awesome will be released in: "
      targetDate={data!.product.releaseDate}
    />
  )
}

export default ProductReleaseCountdown
