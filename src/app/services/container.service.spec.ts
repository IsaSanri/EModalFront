import { TestBed } from "@angular/core/testing";

import { MoviesService } from "./container.service";

describe("MoviesService", () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});