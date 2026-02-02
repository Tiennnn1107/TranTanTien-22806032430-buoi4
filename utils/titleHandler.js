module.exports = {
  ConvertTitleToSlug: function (title) {
    if (!title) return "";

    return title
      .toString()
      .toLowerCase()
      .replace(/đ/g, "d")               // ✅ FIX CHỮ Đ
      .replace(/Đ/g, "d")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")  // bỏ dấu
      .trim()
      .replace(/[^a-z0-9]+/g, "-")      // ký tự đặc biệt → -
      .replace(/-+/g, "-");             // gộp nhiều dấu -
  }
};
