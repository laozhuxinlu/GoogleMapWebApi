下列两个字段中的任何一个：
bounds:它必须是一个用来定义矩形搜索区域的 google.maps.LatLngBounds 对象；
or
location: 需要传入一个 google.maps.LatLng 对象 
radius: 需要传入一个简单的整型数，代表圆形区域的半径（以米为单位）。所允许的最大半径为 50000 米。


keyword:（可选）– 要与所有可用字段进行匹配的词语，包括但不限于 name（名称）、type（类型）和 address（地址），以及客户评论和其他第三方内容。

minPriceLevel: 和 maxPriceLevel（可选）– 使结果仅限于指定范围内的地点。有效值的范围在 0（最实惠）和 4（最昂贵）之间，包括 0 和 4 本身。

name:（可选）– 要与地点名称进行匹配的一个词语。结果将限制为包含所传递的 name 值的项。请注意，除了已列出的名称外，地点可能还有其他关联的名称。该 API 会尝试将传递的 name 值与所有这些名称进行匹配；因此，结果中可能会返回这样的地点：其列出的名称与搜索词语不匹配，但其关联的名称却与搜索词语匹配。
openNow:（可选）– 一个布尔值，指示“地点”服务应只返回发送查询时正在营业的地点。如果您在查询中包含此参数，就不会返回在 Google Places 数据库中未指定开放时间的地点。将 openNow 设置为 false 没有任何作用。
rankBy:（可选）– 指定结果的排列顺序。可能的值为：
google.maps.places.RankBy.PROMINENCE:（默认值）。此选项根据重要性对结果排序。优先列出指定半径区域内的知名地点，而不是虽然匹配但不那么知名的附近地点。知名度受 Google 索引中地点排序、全球知名度和其他因素影响。当指定 google.maps.places.RankBy.PROMINENCE 时，radius 参数是必填的。
google.maps.places.RankBy.DISTANCE:。此选项按其与指定的 location（必填）之间的距离以升序对结果进行排序。与 RankBy.DISTANCE 结合使用时，不支持自定义半径和/或边界。当指定 RankBy.DISTANCE 时，需要提供 keyword、name 或 types 中的一个或多个参数。
types:（可选）– 一个数组，其中包含"Google Places API：支持的地点类型”列表中列出的一个或多个支持的类型。该服务将返回与任何指定类型相匹配的结果。