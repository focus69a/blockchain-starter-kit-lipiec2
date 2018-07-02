
async function tradeCommodity(trade) {

    trade.commodity.owner = trade.newOwner;

    let assetRegistry = await getAssetRegistry('org.cc.nfc.Commodity');

    await assetRegistry.update(trade.commodity);

}
