import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SmashSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SmashSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SmashSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SmashSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SmashSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SmashSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SmashSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SmashSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SmashSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('SmashSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SmashSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('SmashSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SmashSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SmashSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SmashSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SmashSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('SmashSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('SmashSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('SmashSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('SmashSwap Info & Analytics')}`,
        description: 'View statistics for SmashSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('SmashSwap Info & Analytics')}`,
        description: 'View statistics for SmashSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('SmashSwap Info & Analytics')}`,
        description: 'View statistics for SmashSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('SmashSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('SmashSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('SmashSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('SmashSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('SmashSwap')}`,
      }
    default:
      return null
  }
}
