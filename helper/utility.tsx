export const getIsMobile = (UA='') => {
  return Boolean(UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ));
}
export const isBotUser = (agent = '') => {
  const botNames = [ "^BaiDuSpider" , "^Yandex", "^Exabot", "^Cityreview" , "^Dotbot", "^Sogou" , "^Sosospider",
"^Twiceler" ,"^Java", "^YandexBot" , "^bot*", "^spider" , "^crawl", "^NG\ 1.x (Exalead)", "^MJ12bot"];
  const filterResult = botNames.filter((bot)=> agent && agent.includes(bot));
  return filterResult.length ? true : false;
}