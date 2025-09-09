'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9b9d5f8019f0151d46bbf38842f0454c",
".git/config": "ed6aa3347738733bc95510c521a0f5b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1cd484db43f8813662f17ec5c68a8cb4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81e1468125be800dcea9ea1701635445",
".git/logs/refs/heads/main": "2f985ce23ccda5b840092275bb214c58",
".git/logs/refs/remotes/origin/main": "2a08fabacb58c34362f8be36d5e574d0",
".git/objects/01/af5619b11485d445cb4cef3bf99b6bb190c88b": "4f6e18f68726a9dd3d18011e41791e3b",
".git/objects/02/a9cb1d86106d01f4132a2d891a3285347d9744": "804bf2ab89cc4aef89b4a7cb9ce96eff",
".git/objects/04/b8c4be8ee555d9e85ea54ed7f3508881b9def5": "75fb9b90df41d6b5c7069d7147c06392",
".git/objects/04/c00df2b510cb7c2e4f295fc020443785dec721": "323cb0f6a44f6d60a1dd68583ecd4c74",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/7ba07539061ba2f29c510dfa2ac66940023751": "83f2946cd58b65c42ee191b6b8613f6b",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0e/236c615791a1204000d51b11d89bc3c95038fc": "735c9e21977353d49e5b9e96ae8957b1",
".git/objects/10/68cc4c18a8f8615f46ee15b0788fc3b1e3babf": "43365a138091dd09a2fcdfe39771ed1b",
".git/objects/13/5f4945103f77c79baaa30e04accb42b33525c3": "568882421594ef98a556f719ceae5274",
".git/objects/16/c7933bb63c813620a4ae6970637fbc27e3acf2": "937179fc50050926bc9cd217f7051489",
".git/objects/17/fd324eff98567bd37787ad54013eb7bc17488c": "24547a473785f78ebf3cddfcd11f77e3",
".git/objects/18/67b7e2e10acf6b06b7df9e23665e3f1550cd81": "cb7d1bd5e3aea0fb61141c8c298d3d90",
".git/objects/18/8223593428494912200b2f6b5e894081694f56": "514e08bab6846873f59bc06626244fbd",
".git/objects/1a/376d355a4adcfa650f2e54ed2da031d50f659c": "93929533f5ce56688e70d00c1a633a80",
".git/objects/1c/5b60e729c00a991127758f950f20ce4bb60447": "010a8ce2ef1013be053e34ad606964a6",
".git/objects/1d/8395a61aea46d33c3ffb5fb240d5e3eba1c911": "4f618657a947ec09f526bd07cd0a1c57",
".git/objects/1e/d45f977a42b38f3663f17a7e234c614eab8eda": "e1d9b8ab5ca4939792a0f637b258baa3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/bd74408ebe2c905c973860fee2cceb195fcd4d": "7543093c4c6d1f58c7da78877c8f92dd",
".git/objects/21/4ccc40e901f97f2def9daeb7525d063d7d0b9d": "1d1d4b628bfe6891007cf44e5c4133e0",
".git/objects/21/ba7395ada12de95db038682454480d693744c5": "706f524d509e86032b59866a107a4c80",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/a21d352aaa09e0bdc60a2e6689c676c0642b5f": "2f930517dcb734130ea0bd54bec4b100",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/b41209611b4bf33d58daf59a88456264066530": "48015334187541fb18c576ed9474c6f3",
".git/objects/2a/74ea36873db7c8a1777d902ae942d2260d34fe": "6cbf26e2c4fd1b5ca4f60205fd310739",
".git/objects/2b/7f9e66bbbf204b06f335f047ac4db017c4214c": "b3ea6c82aa4bb15b3c5342c3d702e28e",
".git/objects/2e/5d5401c244552ba3a84796ad976071365b8127": "148fe8f6c6ef615f0d200c8dc03b0f72",
".git/objects/31/b29839a639d61912a77a8cce0cc187d1b102eb": "b651ab87b75f7ccb792a92e692224a74",
".git/objects/35/7b639d92f298db23040fd3f919abab1fbf9fd8": "f3324a1ca98be10b75281b7c7dad23ae",
".git/objects/38/2ae7b27cd81c4520c2ccd6de6e37a9e10fdf73": "29d86abb04df9ddfceda4da370bacbfe",
".git/objects/39/72f5e6796d98c5c47b7a4f595f602c397fb84b": "6dfa7f6a970b2ff52aef764fa76d5023",
".git/objects/3d/ae14389f1bbd3c504a25ffc6f1e6d58990200c": "e7cd742b910f2a5388bb9160a883667d",
".git/objects/3e/461db80f94a1696627471a5561315ee8e9417a": "9f0a6f13f20165f8a65548918210dfd1",
".git/objects/42/89c6034922eed7fb04fc47e5d913f6d00f821a": "dafa36ff44e68ac35c28643cb77c5437",
".git/objects/44/bd4259f77bede74d2a22d88b97063e6dc3c841": "1096af043167b4eb930feb75a09df72a",
".git/objects/45/3690a716da349c92e4d2f197f6bc005e000a3f": "e3a28a4026bf95bff6eb7697b2a90c60",
".git/objects/4a/1499615005c2e1d0ad414581c07f18224577bd": "e4a62488597875db67e87ac019b10797",
".git/objects/4b/570414116681cbab088a181cc2576d95ee971d": "d4ce1d1330eadb168f93232f85c9539e",
".git/objects/4c/a44374ea605eebd1217d3aecfe301ff3686a95": "6eff5f0b3408bf66d4d2000f76b3cd4e",
".git/objects/4e/bbac2e72cca5272db7f9f0aa914bc17d358ad0": "7f4c979d06112dae03c2586d59dd149e",
".git/objects/52/d1eeaf298ebec262424ea823ea63799b917a73": "6de773f0cc3fca05202e4c2b3533a767",
".git/objects/54/b1bb2487514055dfbd670ca69ca1fccd651a1c": "ab329daf8be3b0242836046d5d2a537b",
".git/objects/55/b5aa4a0628e12e079f50b7ce95d8b015bb7fc6": "fff0454ef44e91c1425357cc54a2be97",
".git/objects/57/0011af588e9ee7d97badddbabef49fbe61e29f": "bca3b7d68e3dbbac5d7126411c09732d",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/4fa9da1f96aeded2b3737841c9a22808f3bc92": "70d488c54606e3aea3be874f940c5b8e",
".git/objects/5b/254a3ca9c221a73845874de5e81a678bbe3fff": "f4e1c7ae23eef3937fbf0b425a7d28e7",
".git/objects/5b/46fd151a4910ed553a27645acb05b8f5fea9d4": "49ef05c0258fe0ede38c4506c475c7c6",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/62/9f0119ab0aad37893e5312fa921a72d3c98cbc": "8c82137e8f8b46892b4fd2ea4fd75d33",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/91e03e0ac0833593e6e68a068a07106bdb1d2b": "1c1daec9f4b39039e4cd310b15d30497",
".git/objects/65/30de0cea23d5fb8a0ad5bd56befc5f9b8e78b2": "4ad960766f698660ff292720432649e9",
".git/objects/65/d032163b3712848b9020c2d37813aedccd2f73": "273c49172eca835b9314f54af5529b75",
".git/objects/6a/89ab59133b22b1858c87ab7566f2c5770747c1": "ea67ae75aa50f7c9cb08fbfb5807b989",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/89a9eae0ccd8ea8600fd8930c9413b769b57c3": "d6ff3f73be1deafc496a789277c96e82",
".git/objects/70/37a99d5473e86f4886b18d7cb78df3193d8dd1": "7565e6d0669060562e7669fd57ba95f4",
".git/objects/71/6af787c87fefefd8acb0348028829530ae22ba": "8e154baeb88883862e60b3de2cf3b51f",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/0ab95ae342292e038337f2283bfb9ce084f762": "549a5e7a34c99d6475398bfd0589819e",
".git/objects/76/d593811ff22e536ef58f388e111a981ccc9ab1": "32db39233b2e74141e8e1497c9fda356",
".git/objects/77/846f7e1a5ad39176480a672754779b1635e701": "5cd3b22d9580b3c16eba1dd3fcd250f0",
".git/objects/79/82607af9950e40ccab1519d9e51b1957d233a6": "4db66333fd07798bc7a15c4b0db18ae8",
".git/objects/79/a9ad7c10feec3d66e600556b9fd37a3eb67032": "6af738e9efa5ac881e2db458d523e69d",
".git/objects/7b/a0615b145caf37c621b5f0b14bc1cd14479538": "00ec03a569f218213b0c1e9612ce1833",
".git/objects/7c/cfe657e2636eddc4b2854d3f8c3c0828507a70": "76044676e74dfb50e114a45d37f15f21",
".git/objects/7f/cb146f7a4d3eb613e23345353701d7f010b132": "1791f1835b43b32100c49d09db6dbb03",
".git/objects/7f/fab7a494bdd81b6e5b24c88bdf76256dc0fa66": "4337abf1d89366821dc1f9ba12907e98",
".git/objects/85/19023de117753da63347525289467c9de5c8a4": "1a4a0b17196613818bacd2d1b28ab3b8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/17be9c1c420815606db62f21a8891a81834847": "08bbe46cb59807cfe372a9bfed165b79",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/860e6eb2f86d1c28dd3a27de1512d26e748e49": "bcfd53ffd7cc22501b9fefdd5355dc95",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c0ad874be9be431d4cced2ab188df893abdf86": "c6257b2035c65455dbf0a978bd772fa4",
".git/objects/8b/847931d021e7c3c4dfafc0eea86773a47e23f2": "3a98ed7f04072e34e007ca0e5cd70210",
".git/objects/8c/4cd692ffedbf389662352342c2830ef0285b48": "fe336f7c3aab27f1d7ed52db3a16e06f",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/4eaf64c97081efab3de3785a6d8deee16833ed": "087d64f8306af84bb9f49f0393e188d6",
".git/objects/8e/fbc6640206d354a34502ad03f063ad54fd245c": "76d66e92ca826b4431bb986d41a3a489",
".git/objects/93/0c256480f5a25a6bb4a1aef9320228e854f054": "0f7a02695d5fc29a2e5d569e125b4e58",
".git/objects/93/3d76fa7e6b3daa88c053deaf1304edca82d8cf": "47a4156e2d0e30a283cb0650cf053bcc",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/08b949eba155fad1aa69a4e2f0a4f7bad7c545": "0806faf3eb1216f03a232fe0f7a100c1",
".git/objects/98/dc68a28a33150d792a262603aa7afbfb4b8d16": "96598d374b9124dead811cb4ed2b8876",
".git/objects/9a/012a6b1e00112f2e17e3b014900c2537b350a3": "ef3876f1994b37e2c732801314bcad8a",
".git/objects/9a/67fd9bebaa79abb855d9112741040284df1ee0": "fcc838cad8d4d2e34849de9018b4c695",
".git/objects/9a/9d7db243ba9ba472c2bd52bc7e6e365b674b6c": "f338423581eda054b3b0338ee54d16af",
".git/objects/9d/0b6ab261b43c907d9c71f10c2379468f2dc6dc": "286a8b1c302c8583bd24cb2ff349296a",
".git/objects/9d/523abaf983b9a79f94a8a13f1ed91e5c3f725f": "5b4d3902e440b5f2928ed753d63b1071",
".git/objects/9e/b0525f7cf27a4ebf31bcb512c426c3bf8501bf": "4cfc619cbda2f8b6d63dbda33fe41f78",
".git/objects/9f/15bad5b363efaeebe5f2eb32b114aafbdd393e": "a7b6159d9ab24d3215ff8416778cfb31",
".git/objects/a2/dd3ad1112d7af44edb4a01b562dd112338c0ba": "14a4c0edae21bda181bc0b383b12458c",
".git/objects/a5/bdc35cba7f14bd9d212505d6375df47aedb116": "c0da2b1ff763a537ecca34d1dd407bd9",
".git/objects/a8/3467ba1372e13254e6efcba7eb299868da7a0d": "916222284f43201f3228c74523e61114",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/4d0e4598b186209fea3bdace6ab7c04a39f125": "7b564db582a8993c29545412f8d6176f",
".git/objects/b0/d76cf9ed22af62915f08b670b15af30b792bc1": "74ff912205a4e9689cf97e0533bde7e2",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/591c37ed92c765171b8a51c7b75511cf7cc984": "66cab78ec03cb0a385c1fb130585d22f",
".git/objects/b3/8606441cc026f9db1e55a07b755084af5584eb": "398efd713dcea3c7aae7ca71daff14a5",
".git/objects/b3/c40568f2255ac7bcee7c79a0f77c08cd5f59a1": "df562b11c3f52820fbb226621ccd7bcc",
".git/objects/b4/fdf63f4dea482408d87b386c20ad658c87b795": "f78c1abecc60c8c0b99816cd0de992d2",
".git/objects/b5/b4452cbcbeb45369e5c635cf06a0ae7b4b61df": "10ffd15798aec49bc5547a3aa725d5d8",
".git/objects/b5/efad75c3c840a5731f74a24a5df0a6a9327c81": "0bb61d452debf9cd1ad22234b3c167ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6ea03a2582c8a8a3204a9bd785c11987649048": "3d5ace9b6c76651e980a22f234364400",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/53490fb79bccfbbb65443aaa4dd1425e221fbb": "18f6c9be7505b75fd57a1c8b6741da8e",
".git/objects/bb/2d9eb169405c2981fae617ec6085f34700c530": "0e17204d361953a56a0c28d49daa7c64",
".git/objects/bd/81ecc6c55e39ad9f6ce646b623c406fdaef7de": "5b3fa1009140878f5c4a39506ff23fe9",
".git/objects/be/dfc9475c7e560eb623f7d45eac2faa09d96a7b": "270f6539e7691429a41d300a590dc5db",
".git/objects/bf/b6511597dc77eb019e3c3c3b89b2bcae33d746": "5b05c07cf70609db400cf37ce39db542",
".git/objects/c0/884a79ed75df6aad8bac1b93ceb51cb5d96aee": "4be9fcaf60dbe810caba73a7edef7c60",
".git/objects/c0/d168c3b307cd0dc36c085fb34f3e3dce88101e": "eb530656f47f91f02c3e0a36e5d1b0d5",
".git/objects/c2/6615cd6cc25314a5ae6fd23a118611adb86337": "c8b28786e145c01b5688f8128f71bcaa",
".git/objects/c2/7b1e296808c99c3962aace58bdece669391f6a": "e52b60f74fae24e4364d3b52fcdad6f5",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/b2d39517bcc8acb5b062b577cda6f62839329a": "0905a31b3ded28a2d87d85fceaf8b0c3",
".git/objects/c4/eaa31c2dd61707242d7f2593ef3af437c95554": "bea683981c87285d51258f8959b21524",
".git/objects/c5/0306f17b15919fa1997f81b1f5a5ba46154670": "32e3c6fd1a2556eb7d69f8ee7677f4fc",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/2ad60745b07c9e06721cbe5b2cde276ba31e0a": "a4b7ebb416db0135f190decb3e14c3ad",
".git/objects/c9/9849ee28f8231301ac77563d5438e086a17dec": "8999b8be8d56bcf86c807ba7ee6f0382",
".git/objects/cb/7888b6f9f34c0be9952876f2c953978f80ff2a": "6b0b55324cfc8b9f2588ac9b31eac961",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/cf/b9f6462663ee6a37528ef6e1aabb828a106ae9": "63a1a45f87f355c26d13a127292d1a7e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/5901b42a3b42195b0cc4e8a02dc549ca97e7c7": "dba23525c36d37a96ff07e7f9b09bb86",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/a6283010d3339d45d51c15c1f881e76a3aef07": "4dcd2c093c4e8f5cc145f106d3db4281",
".git/objects/dd/7885ff3f55599f4f20d4d6990e12fa18e1952e": "15d6909f2ce8ca9d7aabee52c31ccc33",
".git/objects/de/d18e11eb4339010f5d0b537c029dabe65f6916": "7e48a943d46bd29219834f9f84d34a3c",
".git/objects/df/076da438ef2fb5b731bd4629dd5979b5146c38": "8e62b50cc6f1b1f18e77710dcd72993e",
".git/objects/e0/8951070c007ec9daeeb9b17a0716d74b8b4eb6": "3c9882bdfb20a95bcceae421cbdb7059",
".git/objects/e5/48f8e8b8eb2643a5d1557bd40ff4140433bbce": "9e86d555de3bd7f75737bc65f6ed941f",
".git/objects/e8/a8ff9152bf4eebbaff0853451292486a9230be": "918bc5a0cab8616fbc82f584bc95f43b",
".git/objects/eb/4f3f6aaa60c9079bcf19599bb93086f52a414c": "396b22b6e1c6dc611e5a2600e2bba3d4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/66db11e43a6ca244f9140ad8e9286f0b16b399": "53b1b49e909fae320f2523fafe48dbb3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/94db24c19c9162a5bbc9fc44293dd654d39590": "788f10e373c676c8035151d83b3451e2",
".git/objects/f8/2fea8fd51c061a3a8b7b0719c35b8a7478147e": "de0a91f239791252e3831a032b297f60",
".git/objects/f9/0bf991a6b7318124e52356ee014a6d33b53d7e": "e758aefc1731f57a1d75a647929729c3",
".git/objects/f9/26b82b4134dcf907743c7887a8dcf47359addb": "0b012771813df56644982601ffb4f611",
".git/objects/fb/a8974e3cb7eeb87b04634e855aa326c8b9d15c": "13e06b79d6d13448f9e0064122bc3a6c",
".git/objects/fb/a94ccc3aac431ddc14477642e5d50b7146d505": "8ad178b54f12022f36c638b6642e787a",
".git/objects/fb/f4f6fd078962e00101e37d806293eeb406d990": "94223b3214036602cafe4be38311366e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/c37aa8a6960919c3fe57f6483c5d5b2623c96d": "63475784ab0b61a27b3060bf6a3495aa",
".git/refs/heads/main": "0771eb9d109052dd77a627ed3cf9ca04",
".git/refs/remotes/origin/main": "0771eb9d109052dd77a627ed3cf9ca04",
"assets/AssetManifest.bin": "f0ddddf08c7e9459f8a4b49fec1a7804",
"assets/AssetManifest.bin.json": "b6f317d1bc438e4357617ab3e21ff51d",
"assets/AssetManifest.json": "703470fe59e1160ebfbd273776a01f2e",
"assets/assets/%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B1%25D8%25B4%25D8%25AD-%25D9%2587%25D9%2588%25D9%2585.jpg": "bf32d5b6aac2d53b470c319b1aefc2a1",
"assets/assets/%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B1%25D8%25B4%25D8%25AD-%25D9%2587%25D9%2588%25D9%25852.jpg": "62e627f8f0ac94281affe562fb3f9b92",
"assets/assets/%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B5%25D9%2588%25D9%258A%25D8%25AA.jpeg": "031a9eced69c4bdee5333e373f4af055",
"assets/assets/%25D8%25AA%25D8%25BA%25D9%258A%25D8%25B1%2520%25D9%2583%25D9%2584%25D9%2585%25D9%2587%2520%25D8%25A7%25D9%2584%25D9%2585%25D8%25B1%25D9%2588%25D8%25B1.jpg": "72e99514848b87680e2e910bf5707712",
"assets/assets/%25D8%25B9%25D8%25B1%25D8%25B6%2520%25D8%25A7%25D9%2584%25D9%2585%25D8%25B1%25D8%25B4%25D8%25AD%25D9%2588%25D9%2586.jpg": "c04c6f0c1b91004f5d419f0fa3292513",
"assets/assets/%25D8%25B9%25D9%2585%25D9%2584%2520%25D8%25B5%25D9%2588%25D8%25AA.jpg": "1fc1a616c6616b7166487f029df836c7",
"assets/assets/%25D9%2581%25D8%25AA%25D8%25B1%25D8%25A9%2520%25D8%25B1%25D9%2581%25D8%25B9%2520%25D8%25A7%25D9%2584%25D8%25AD%25D9%2585%25D9%2584%25D9%2587.jpg": "a980ac93bb69edfd13f2b60cfd5dec75",
"assets/assets/%25D9%2581%25D8%25AA%25D8%25B1%25D9%2587%2520%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B5%25D9%2588%25D9%258A%25D8%25AA.jpg": "f4ef0b40441a8d12e0f0e16860be483b",
"assets/assets/%25D9%2581%25D9%2588%25D8%25B1%25D9%2585%2520%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B1%25D8%25B4%25D9%258A%25D8%25AD.jpg": "9f24ebc37d3524930745ff26efff617a",
"assets/assets/%25D9%2581%25D9%2588%25D8%25B1%25D9%2585%2520%25D8%25B1%25D9%2581%25D8%25B9%2520%25D8%25A7%25D9%2584%25D8%25AD%25D9%2585%25D9%2584%25D9%2587.jpg": "f68a87277145b8e37b9e3fbb959e7d16",
"assets/assets/%25D9%2581%25D9%2588%25D8%25B1%25D9%2585%2520%25D8%25B1%25D9%2581%25D8%25B9%2520%25D8%25A7%25D9%2584%25D8%25AD%25D9%2585%25D9%2584%25D9%25872.jpg": "ade1fa20f235433cea401a2efdff6174",
"assets/assets/%25D9%2586%25D8%25AA%25D8%25A7%25D8%25A6%25D8%25AC.jpeg": "743c6fadeea84e9a1f73332dd1cfb914",
"assets/assets/Bookly-App.jpeg": "a12715fd29ac6d9a86f7829e9a7e8811",
"assets/assets/Bookly-Book%2520detials.jpg": "c9c2d2bb2619fe204ff348bfad231df5",
"assets/assets/Bookly-Home.jpg": "1011c8cda8f3c545f4f8d90391438197",
"assets/assets/Bookly-Search.jpg": "305a200999893b1e2f3f5d9cebb7d142",
"assets/assets/Bookly-Splash.jpg": "b62d26c566cdac657c4929c6340da558",
"assets/assets/help.jpg": "626e213fc6b643693c79420f5b83aaad",
"assets/assets/iDemocracy.png": "a494a07c122df3d4cc4f06fca5376d23",
"assets/assets/iDemocracy2.jpeg": "323895aab6720e4d4bae7868abfb7ba7",
"assets/assets/login.jpeg": "1e61e0ddcf14d782ee6322e40c7cc13a",
"assets/assets/MSG%2520app.jpeg": "738ba426c262f50e558542ee27254c63",
"assets/assets/MSG%2520Login.jpeg": "c976c17c488e593e6c745520e494fe25",
"assets/assets/MSG%2520Signup.jpeg": "4e0331ef2bcca9b5cfa025b915cf5f86",
"assets/assets/MSG_group.jpeg": "dcc7807077f892f0d46841e7b933851b",
"assets/assets/MSG_group2.jpeg": "8214f765372ffd2204b92575fca5b998",
"assets/assets/MSG_home.jpeg": "dc1efedfcac59a17fc9bc5d407b9341a",
"assets/assets/MSG_splash.jpeg": "2bb388ff433164c1026f96d6c6a5b41a",
"assets/assets/my_photo.png": "6420308b9febd887ca720c0045c24005",
"assets/assets/News-App.png": "9dc8eb560957efe5d88080e9d27e1fc8",
"assets/assets/News-Category.jpg": "0b180cece72f0a931556780615587faa",
"assets/assets/News-Home.jpg": "61271b5b818b7c4d31d0f3420da5c4cc",
"assets/assets/Note%2520App.jpeg": "a737deba72a607eb55b4e819bd19a3c8",
"assets/assets/Note-Edit.jpg": "28c96d0f089c351ad7b87d826f9c53fa",
"assets/assets/Note-Home.jpg": "9fd351605400b9d431c649b509594183",
"assets/assets/Note_add.jpeg": "a5e642b90f0a5c3a1671cc6234614c6b",
"assets/assets/Note_home.jpeg": "7a490d61cea154ae4e9bb1d49528ed0f",
"assets/assets/Note_notification.jpeg": "bf9c7b3a20024bef68d7347f4af0e536",
"assets/assets/Note_search.jpeg": "ef60c8151e92f4207a3bfa5eb555924f",
"assets/assets/Payment-App.png": "9e38f405f16d28f5ac9f619e528edd83",
"assets/assets/Payment-Home.jpg": "3a6c52a77a29ff0f916a0013cf015438",
"assets/assets/Payment-methods.jpg": "a37577fe5d3d25afac8d47bf9220552e",
"assets/assets/Payment-PayPal.jpg": "c00d9afd43c1a02ef1022f2605d2ae92",
"assets/assets/Payment-Stripe.jpg": "7cc959874707a90c8a4f6f6b872dd7d7",
"assets/assets/profile%2520%25D8%25A7%25D9%2584%25D9%2585%25D8%25B1%25D8%25B4%25D8%25AD.jpg": "f48fda7421c968294a4e7395c3d3de81",
"assets/assets/profile.jpg": "81b5b254ecf1d6e21ee6a33df4497be3",
"assets/assets/Quiz-App.png": "36f756df126d5a8ac35b9c641ce9b084",
"assets/assets/Quiz-Home.jpg": "cd598b7a3de1fab11da9bbfc9be53ec9",
"assets/assets/Quiz-login.jpg": "f572849192dc648119d57444921a144a",
"assets/assets/Quiz-Qeustion.jpg": "2f49f6e736cd32c52260b59262a983d1",
"assets/assets/Quiz-Result.jpg": "1cc77f1c1451ffa2dfe66a449ecad447",
"assets/assets/Quiz-SignUp.jpg": "8702a9e1115fe8b2c353fe1c7f5a8f35",
"assets/assets/Quiz-Start.jpg": "a02b74b83ea01d00fdd60927c2675376",
"assets/assets/Register.jpg": "375756a6083931cd906abd8dd45a827c",
"assets/assets/Route%2520Tracker-App.png": "fafbad9c70f73a7142e8b8a93de9f735",
"assets/assets/Route-Tracker-display-route.jpg": "72e63587478b11be0414be0900ff3c5f",
"assets/assets/Route-Tracker-Home.jpg": "1816594fd45b377b4e7a5755686513b7",
"assets/assets/Route-Tracker-Location.jpg": "85a4345a9f47c346da2e7c117b106d3a",
"assets/assets/Route-Tracker-make-direction.jpg": "084035bbf32978122fcaa669857caa95",
"assets/assets/Route-Tracker-Search.jpg": "c6eb340d73b8dc95c7e28132c0d8ca9e",
"assets/assets/Route-Tracker-Splash.jpg": "fa3775b2c2578945ad844a4df3b10aab",
"assets/assets/splashh.jpeg": "af384a0a111e2cbb8179f218eb84a751",
"assets/assets/Sports-App.png": "9420234e72301fb37bc17064388585c1",
"assets/assets/Sports-Countries.jpg": "58b89378f145fc490e987c023877e882",
"assets/assets/Sports-Home.jpg": "3154243feae1d07d4660914c7aec7aaa",
"assets/assets/Sports-Legs.jpg": "d4c9e96a7032b3a1061ee225fdc20eff",
"assets/assets/Sports-splash.jpg": "eacf4d5bda5c001a9cd12c4edaf06be1",
"assets/assets/Sports-Teams.jpg": "cc349200f82c6472d327d434baebab5c",
"assets/assets/Sports-TopScorer.jpg": "1ca4025099ec8ce6c35b630a2e81ff15",
"assets/assets/Weather-App.png": "6ae452c4b01f451c1a18f54e4cdecb14",
"assets/assets/Weather-home.jpg": "4082cdce2968d2213051400c07ec6214",
"assets/assets/Weather-Home2.jpg": "e346e1c17dc514fcd6f65c24f49b3db5",
"assets/assets/Weather-Search.jpg": "3a95ee744599d316c52d8226a5e02a46",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "9d943359122c803e0b3fca28ab0e3a46",
"assets/NOTICES": "fa78ff874e04b3180fff59f071575038",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b17b305d3195f2faf295b77afae0fe06",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "cfc7a87e52d1a7b0ca0932fd55afbc8f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "afc94b472cff3d5628cd2eb0c0c14262",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
