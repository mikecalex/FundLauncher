date_formats = {
  long_date: "%m/%d/%Y",
  short_date: "%m/%d/%Y"
}

Date::DATE_FORMATS.merge!(date_formats)
Time::DATE_FORMATS.merge!(date_formats)
