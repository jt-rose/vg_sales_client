// this object records the total sales (in millions)
// by regions that are tracked
// across the database. This allows us to contrast the sales
// found by the current query's limit/ offset search
// to understand how the results of that query compare to the
// total possible sales

// ie: do the top 10 genre's (ranked by sales) account for
// 90% of sales or just 50%?

export const totalSales = {
  global_sales: 8831.54,
  na_sales: 4346.92,
  eu_sales: 2405.3,
  jp_sales: 1291.3,
  other_sales: 783.87,
}
