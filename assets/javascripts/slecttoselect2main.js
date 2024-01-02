/*
 Select To Select2 Plugin Main.
 */

(function ($) {
  // For Ajax
  $(document).on("ajaxComplete", function () {
    replaceAllSelect2();
  });

  // For GET,POST Request
  // For jQuery Version >= 3.X Redmine Version 5.0.2 4.2.7 3.4.13 OK
  $(window).on("load", function () {
    replaceAllSelect2();
  });

  $("div").on("change", "select", function (event) {
    replaceAllSelect2();
  });

  // Judge and process the class name for some special buttons.
  $(document).on("click", function (event) {
    /**
     * "toggle-multiselect" is a class name of toggle multi select elements
     * "assign-to-me-link" is a class name of assign to me link
     */
    // var hasClass = Array.from(event.target.classList).indexOf('name') > -1;

    if (
      $(event.target).hasClass("toggle-multiselect") ||
      $(event.target).hasClass("assign-to-me-link") ||
      $(event.target).hasClass("icon-expended")
    ) {
      replaceAllSelect2();
    }
  });

  // for all elements
  $(document).change(function (event) {
    replaceAllSelect2();
  });
})(jQuery);

function replaceAllSelect2() {
  var ignoreIds = [
    "available_c",
    "selected_c",
    "issue_template",
    "issue_assigned_to_id",
  ];
  var specificIds = [
    "year",
    "month",
    "columns",
    "settings_issuequery_query_id",
    "block-select",
  ];

  var elements = $("select");

    // Skip if the ID starts with "values_" or it's in the ignore list or already a Select2
    if (id.startsWith("values_") || ignoreIds.includes(id)) {
      return;
    }

    // Apply specific width for certain IDs
    if (specificIds.includes(id)) {
      $this.select2({
        dropdownAutoWidth: true,
        width: "175px",
        placeholder: "",
        allowClear: true,
      });
    } else {
      // Apply general settings for all other select elements
      var w = $this.width();
      $this.select2({
        dropdownAutoWidth: true,
        width: "resolve",
        placeholder: "",
        allowClear: true,
      });
    }
  }
}
