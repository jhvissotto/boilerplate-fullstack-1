import { chance } from '.'

export const sample = {
  avatar: '//www.gravatar.com/avatar/915ac0495ee58f31c8026f624d932d34',
  color: 'GreenYellow',
  company: 'Unisys Corporation',
  domain: 'eniluema.cl',
  email: 'ecoedozuj@rebav.to',
  fbid: '1000065109283285',
  google_analytics: 'UA-169401-36',
  hashtag: '#pucrise',
  ip: '254.205.37.184',
  ipv6: 'c33a:f71d:bc4d:34be:2a04:b2d2:261f:aec8',
  klout: 7,
  profession: 'Software Developer',
  tld: 'cf',
  twitter: '@zermave',
  url: 'http://bevgooda.ai/ifkis',
  mac_address: 'FF:6E:F3:51:D9:2E',
}

// prettier-ignore
export const {
  avatar,
  color,
  company,
  domain,
  email,
  fbid,
  google_analytics,
  hashtag,
  ip,
  ipv6,
  klout,
  profession,
  tld,
  twitter,
  url,
  mac_address,
} = chance

// prettier-ignore
export function all({
  avatar            = [],
  color             = [],
  company           = [],
  domain            = [],
  email             = [],
  fbid              = [],
  google_analytics  = [],
  hashtag           = [],
  ip                = [],
  ipv6              = [],
  klout             = [],
  profession        = [],
  tld               = [],
  twitter           = [],
  url               = [],
  mac_address       = [],
}: {
  avatar?:             Parameters<typeof chance.avatar>,
  color?:              Parameters<typeof chance.color>,
  company?:            Parameters<typeof chance.company>,
  domain?:             Parameters<typeof chance.domain>,
  email?:              Parameters<typeof chance.email>,
  fbid?:               Parameters<typeof chance.fbid>,
  google_analytics?:   Parameters<typeof chance.google_analytics>,
  hashtag?:            Parameters<typeof chance.hashtag>,
  ip?:                 Parameters<typeof chance.ip>,
  ipv6?:               Parameters<typeof chance.ipv6>,
  klout?:              Parameters<typeof chance.klout>,
  profession?:         Parameters<typeof chance.profession>,
  tld?:                Parameters<typeof chance.tld>,
  twitter?:            Parameters<typeof chance.twitter>,
  url?:                Parameters<typeof chance.url>,
  mac_address?:        Parameters<typeof chance.mac_address>,
}) {

  return {
    avatar:             chance.avatar(              ...avatar),
    color:              chance.color(               ...color),
    company:            chance.company(             ...company),
    domain:             chance.domain(              ...domain),
    email:              chance.email(               ...email),
    fbid:               chance.fbid(                ...fbid),
    google_analytics:   chance.google_analytics(    ...google_analytics),
    hashtag:            chance.hashtag(             ...hashtag),
    ip:                 chance.ip(                  ...ip),
    ipv6:               chance.ipv6(                ...ipv6),
    klout:              chance.klout(               ...klout),
    profession:         chance.profession(          ...profession),
    tld:                chance.tld(                 ...tld),
    twitter:            chance.twitter(             ...twitter),
    url:                chance.url(                 ...url),
    mac_address:        chance.mac_address(         ...mac_address),
  } 
}
